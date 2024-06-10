from rest_framework.serializers import ModelSerializer
from .models import Events, Guest, ContactForm, Researcher
from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer

User = get_user_model()

class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password']

class EventSerializer(ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'

class GuestSerializer(ModelSerializer):
    class Meta:
        model = Guest
        fields = '__all__'

class ContactFormSerializer(ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'

class ResearcherSerializer(ModelSerializer):
    class Meta:
        model = Researcher
        fields = '__all__'