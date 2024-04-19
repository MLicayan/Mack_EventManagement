from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import User, Events, Guest
from .serializer import UserSerializer, EventSerializer, GuestSerializer

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GuestListCreateView(generics.ListCreateAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

class EventListCreateView(generics.ListCreateAPIView):
    queryset = Events.objects.all()
    serializer_class = EventSerializer

class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Events.objects.all()
    serializer_class = EventSerializer

