from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager
import qrcode
from django import forms
from io import BytesIO
from django.core.files import File
from PIL import Image, ImageDraw

# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(_("First Name"), max_length=100)
    last_name = models.CharField(_("Last Name"), max_length=100)
    email = models.EmailField(_("Email Address"), max_length=254, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD ="email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = CustomUserManager()

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")

    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"


class Guest(models.Model):
    GuestName = models.CharField(max_length=100)
    Email = models.EmailField(max_length=254)
    Address = models.TextField()
    Contact_Number = models.CharField(max_length=15)
    qr_code = models.ImageField(blank=True, upload_to='qr_codes')

    def __str__(self):
        return self.GuestName

    def save(self, *args, **kwargs):
        guest_info = f'{self.GuestName} | {self.Email} | {self.Contact_Number}'
        qrcode_img = qrcode.make(guest_info)
        canvas = Image.new('RGB', (370, 370), 'white'   )
        draw = ImageDraw.Draw(canvas)
        canvas.paste(qrcode_img)
        fname = f'{self.GuestName}.png'
        buffer = BytesIO()
        canvas.save(buffer,'PNG')
        self.qr_code.save(fname, File(buffer), save=False)
        canvas.close()
        super().save(*args,**kwargs)

class Events(models.Model):
    EventTitle = models.CharField(max_length=255)
    Event_Date = models.DateField()
    Description = models.TextField()
    Address = models.TextField()
    Contact_Number = models.CharField(max_length=15)
    qr_code = models.ImageField(blank=True, upload_to='qr_codes')

    def __str__(self):
        return self.EventTitle
    
    def save(self, *args, **kwargs):
        qrcode_img = qrcode.make(self.EventTitle)
        canvas = Image.new('RGB', (300, 300), 'white')
        draw = ImageDraw.Draw(canvas)
        canvas.paste(qrcode_img)
        fname = f'{self.EventTitle}.png'
        buffer = BytesIO()
        canvas.save(buffer,'PNG')
        self.qr_code.save(fname, File(buffer), save=False)
        canvas.close()
        super().save(*args,**kwargs)

class ContactForm(models.Model):
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.LastName

class Researcher(models.Model):
    First_Name = models.CharField(max_length=100)
    Last_Name = models.CharField(max_length=100)
    Email_Address = models.EmailField(max_length=254)

    def __str__(self):
        return self.Fist_Name