from django.db import models


# Create your models here.
class PracticeSession(models.Model):
    session_id = models.CharField(max_length=255)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to="images/", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    questions = models.ManyToManyField("questions.Question", related_name="sessions")

    def __str__(self):
        return self.name
