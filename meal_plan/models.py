from django.db import models
from django.urls import reverse

# Create your models here.

class UserGoals(models.Model):
    calories = models.PositiveSmallIntegerField()
    daily_carbs = models.PositiveSmallIntegerField()
    daily_protein = models.PositiveSmallIntegerField()
    daily_fats = models.PositiveSmallIntegerField()

class Recipe(models.Model):
    name = models.CharField(max_length=250)
    picture_url = models.URLField(max_length=1000)
    description = models.CharField(max_length=2500)
    calories = models.PositiveSmallIntegerField()
    carbs = models.PositiveSmallIntegerField()
    protein = models.PositiveSmallIntegerField()
    fats = models.PositiveSmallIntegerField()
    ingredients = models.ForeignKey('Ingredient', on_delete=models.PROTECT, related_name="recipe")
    steps = models.ForeignKey('Step', on_delete=models.PROTECT, related_name="recipe")

    def get_recipe_url(self):
        return reverse("recipe_detail", kwargs={"id" : self.id})

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    unit = models.CharField(max_length=100)
    food = models.CharField(max_length=250)

    def __str__(self):
        return f"{self.amount} {self.unit} of {self.food}"

class Step(models.Model):
    text = models.CharField(max_length=500)



