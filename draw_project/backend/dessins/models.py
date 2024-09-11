from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# Create your models here.

# table de dessin avec ces détails
class Dessin(models.Model):
    nom_personnage = models.CharField(max_length=30)
    date_realisation = models.DateField()
    temps_passe = models.CharField(max_length=20)
    materiel_utilise = models.CharField(max_length=255)
    difficulte = models.CharField(max_length=255)
    description = models.CharField(max_length=250, default='Pas de description') 
    image = models.ImageField(upload_to='dessins/')

# pour retourner le nom du personnage dans la table
    def __str__(self):
        return self.nom_personnage

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    dessin = models.ForeignKey('Dessin', on_delete=models.CASCADE)  # Assurez-vous que 'Dessin' est le nom correct de votre modèle de dessin
    date_commande = models.DateTimeField(auto_now_add=True)
    statut = models.CharField(max_length=20, choices=[
        ('en_attente', 'En attente'),
        ('en_cours', 'En cours'),
        ('terminee', 'Terminée'),
        ('annulee', 'Annulée')
    ], default='en_attente')

    def __str__(self):
        return f"Commande {self.id} par {self.user.username}"

