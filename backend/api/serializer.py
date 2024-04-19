from rest_framework.serializers import ModelSerializer
from .models import User, Events, Guest
from djoser.serializers import UserCreateSerializer

class CreateUserSerializer(UserCreateSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class EventSerializer(ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'

class GuestSerializer(ModelSerializer):
    class Meta:
        model = Guest
        fields = '__all__'