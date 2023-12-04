from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User


def  User_Directory_Path(instance, filename):
    return 'media/Posts/{0}/{1}'.format(instance.id, filename)

class Category(models.Model):
    name = models.CharField(max_length=2000)

    def __str__(self):
        return self.name

# Making A form for post
class Post(models.Model):

    #for filtering out draft and published post that displays on the web
    class NewManager(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(Status='published')
        
    #Status Option Data
    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    Title = models.CharField(max_length=250)
    First_Name = models.CharField(max_length=15)
    Last_Name = models.CharField(max_length=15)
    Email = models.EmailField(max_length=30)
    slug = models.SlugField(max_length=250, unique_for_date='Publish', default='default')
    Publish = models.DateTimeField(default=timezone.now )
    Author = models.ForeignKey (User, on_delete=models.CASCADE, related_name='blog_posts')
    Content = models.TextField()
    Category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    Category_Tag = models.CharField(max_length=20, default='Default')
    Image = models.ImageField(upload_to=User_Directory_Path)
    Status = models.CharField(max_length=10, choices=options, default='draft')
    Objects = models.Manager() #default Manager
    Newmanager = NewManager() #custom manager


    #to get to each individual post from a link
    def get_absolute_url(self):
        return reverse('PassionPage_Users:Single_Post_Page', args=[self.slug])
    
  
    #ordering the list of post from latest to least latest
    class Meta:
        ordering = ('-Publish',)[:8]

    #making Human Readable text on post title in the database
    def __str__(self):
        return self.Title
    

class Comment(models.Model):
    Post = models.ForeignKey(Post, on_delete=models.CASCADE,related_name='Comment' )
    Name = models.CharField(max_length=20)
    Email = models.EmailField(max_length=25)
    Comment = models.TextField(max_length=270)
    Publish = models.DateTimeField(default=timezone.now)
    Status = models.BooleanField(default=True)

    class Meta:
        ordering = ('-Publish',)

    def __str__(self):
        return f"Comment by {self.Name}"
    