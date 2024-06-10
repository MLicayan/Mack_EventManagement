from django.urls import path
from .views import EventListCreateView, EventDetailView, GuestListCreateView, GuestDetailView, ContactFormDetailView, ContactFormCreateView, ResearcherDetailView, ResearcherListCreateView

urlpatterns = [
    path('events/<int:pk>/',EventDetailView.as_view(), name="event-detail"),
    path('events/',EventListCreateView.as_view(), name="event-list-create"),
    path('guest/<int:pk>/',GuestDetailView.as_view(), name="guest-detail"),
    path('guest/',GuestListCreateView.as_view(), name="guest-list-create"),
    path('contactform/<int:pk>/',ContactFormDetailView.as_view(), name="contact-form-detail"),
    path('contactform/',ContactFormCreateView.as_view(), name="contact-form-create"),
    path('researcher/<int:pk>/',ResearcherDetailView.as_view(), name="researcher-detail"),
    path('researcher/',ResearcherListCreateView.as_view(), name="researcher-list-create"),
]

