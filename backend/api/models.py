from django.db import models
import qrcode
from io import BytesIO
from django.core.files import File
from PIL import Image, ImageDraw

# Create your models here.
class User(models.Model):
    First_Name = models.CharField(max_length=100)
    Last_Name = models.CharField(max_length=100)
    Username = models.CharField(max_length=100)
    Email = models.EmailField(max_length=255)
    Birth_Date = models.DateField()
    
    def __str__(self):
        return self.Username

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
