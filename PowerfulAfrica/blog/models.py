from django.db import models

class ArticleCard(models.Model):
    image = models.ImageField(upload_to='article_images') 
    title_english = models.CharField(max_length=255)
    title_french = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    date = models.DateField()
    pdf_english = models.FileField(upload_to='documents/', default='default.pdf')
    pdf_french = models.FileField(upload_to='documents/', default='default.pdf')

    def __str__(self):
        return self.title_english
    
class Magazine(models.Model):
    image = models.ImageField(upload_to='magazines_images') 
    title_english = models.CharField(max_length=255)
    title_french = models.CharField(max_length=255)
    date = models.DateField()
    pdf_english = models.FileField(upload_to='documents/', default='default.pdf')
    pdf_french = models.FileField(upload_to='documents/', default='default.pdf')
    def __str__(self):
        return self.title_english
