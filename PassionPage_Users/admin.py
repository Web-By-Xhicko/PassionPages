from django.contrib import admin
from  .import models

#helps to show more  information on the post outer page in the admin panel
@admin.register(models.Post)
class Authoradmin(admin.ModelAdmin):
    list_display = ('id','Title','Status', 'Last_Name', 'Category')
    prepopulated_fields = {
        "slug":("Title",),}
    # list_filter = ("slug", "Last_Name", "First_Name")
    # search_fields = ("Author", 'Last_Name', 'First_Name')
    


@admin.register(models.Comment)
class AuthoComment(admin.ModelAdmin):
    list_display =("Name", "Publish", "Status")
    list_filter = ("Status", "Publish")
    search_fields = ("Name", "Email","Content")


# @admin.register(models.User_Profile)
# class AuthoUserProfile(admin.ModelAdmin):
#     list_display = ("Avatar")

admin.site.register(models.Category)
# admin.site.register(models.User_Profile)
