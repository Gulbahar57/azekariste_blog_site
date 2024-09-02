from django.db import models

# Create your models here.

# table de dessin avec ces détails
class Dessin(models.Model):
    nom_personnage = models.CharField(max_length=30)
    date_realisation = models.DateField()
    temps_passe = models.CharField(max_length=20)
    materiel_utilise = models.CharField(max_length=255)
    difficulte = models.CharField(max_length=255)
    image = models.ImageField(upload_to='dessins/')

def __str__(self):
    return self.nom_personnage