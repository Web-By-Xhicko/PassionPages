from django.contrib import admin
from django.urls import path, include

admin.site.site_header = "PassionPage Admin"
admin.site.index_title = "PassionPage Administration"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('PassionPage_Users.urls', namespace='PassionPage_Users')),
]
