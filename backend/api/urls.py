from django.urls import path
from .views import UserListCreateView, EventListCreateView, EventDetailView, GuestListCreateView

urlpatterns = [
    path('user/',UserListCreateView.as_view(), name="user-list-create"),
    path('events/<int:pk>/',EventDetailView.as_view(), name="event-detail"),
    path('events/',EventListCreateView.as_view(), name="event-list-create"),
    path('guest/',GuestListCreateView.as_view(), name="guest-list-create"),
]

