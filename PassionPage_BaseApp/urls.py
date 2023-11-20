from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('PassionPage_Users.urls', namespace='PassionPage_Users')),
]
