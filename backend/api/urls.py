from django.urls import path
from .views import UserListCreateView, EventListCreateView, EventDetailView, GuestListCreateView, GuestDetailView

urlpatterns = [
    path('user/',UserListCreateView.as_view(), name="user-list-create"),
    path('events/<int:pk>/',EventDetailView.as_view(), name="event-detail"),
    path('events/',EventListCreateView.as_view(), name="event-list-create"),
    path('guest/<int:pk>/',GuestDetailView.as_view(), name="event-detail"),
    path('guest/',GuestListCreateView.as_view(), name="guest-list-create"),
]

