from django.db import models


# Create your models here.
class Quiz(models.Model):
    name = models.CharField(max_length=100)
    quiz_id = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to="images/", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    questions = models.ManyToManyField("questions.Question", related_name="quizzes")
