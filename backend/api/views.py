from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Events, Guest, ContactForm, Researcher
from .serializer import EventSerializer, GuestSerializer, ContactFormSerializer, ResearcherSerializer

class GuestListCreateView(generics.ListCreateAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

class GuestDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

class EventListCreateView(generics.ListCreateAPIView):
    queryset = Events.objects.all()
    serializer_class = EventSerializer

class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Events.objects.all()
    serializer_class = EventSerializer

class ContactFormCreateView(generics.ListCreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer

class ContactFormDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer

# =========================================================================================================

class ResearcherListCreateView(generics.ListCreateAPIView):
    queryset = Researcher.objects.all()
    serializer_class = ResearcherSerializer

class ResearcherDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Researcher.objects.all()
    serializer_class = ResearcherSerializer

