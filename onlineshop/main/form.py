from django import forms


class ContactForm(forms.Form):
    mail = forms.CharField(max_length=255)
