from django import forms

class SupportForm(forms.Form):
    nombre = forms.CharField(max_length=30)
    email = forms.EmailField(max_length=254)
    mensaje = forms.CharField(
        max_length=5000,
        widget=forms.Textarea(),
        help_text='Escribe tu mensaje.'
    )

    def clean(self):
        cleaned_data = super(SupportForm, self).clean()
        nombre = cleaned_data.get('name')
        email = cleaned_data.get('email')
        mensaje = cleaned_data.get('message')
        if not nombre and not email and not mensaje:
            raise forms.ValidationError('Tienes que escribir algo!')

class ExperienceForm(forms.Form):
    nombre = forms.CharField(max_length=30)
    email = forms.EmailField(max_length=254)
    nombre_experiencia = forms.CharField(max_length=254)
    mensaje = forms.CharField(
        max_length=10000,
        widget=forms.Textarea(),
        help_text='Describe como debe ser tu experiencia.'
    )

    def clean(self):
        cleaned_data = super(ExperienceForm, self).clean()
        nombre = cleaned_data.get('name')
        email = cleaned_data.get('email')
        nombre_experiencia = cleaned_data.get('nombre_experiencia')
        mensaje = cleaned_data.get('message')
        if not nombre and not email and not mensaje:
            raise forms.ValidationError('Tienes que escribir algo!')
