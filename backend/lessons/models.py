from django.db import models


# Create your models here.
class Lesson(models.Model):
    lesson_id = models.CharField(max_length=255)
    question_id = models.CharField(max_length=255)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to="images/", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    questions = models.ManyToManyField("questions.Question", related_name="lessons")


class Option(models.Model):
    option_id = models.CharField(max_length=255)
    question_id = models.CharField(max_length=255)
    name = models.CharField(max_length=100)
    is_correct = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    questions = models.ManyToManyField("questions.Question", related_name="options")
