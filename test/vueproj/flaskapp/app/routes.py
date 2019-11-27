from flask import Flask, render_template, request, flash
from forms import ContactForm
import os
 
app = Flask(__name__) 
 
app.secret_key = 'development key'

@app.route('/')
def home():
  return render_template('home.html')
 

@app.route('/contact', methods=['GET', 'POST'])

def contact():
  form = ContactForm()
 
  if request.method == 'POST':
    return 'Form posted.'
 
  elif request.method == 'GET':
    return render_template('contact.html', form=form)

@app.route('/about')
def about():
  return render_template('about.html')


if __name__ == '__main__':
   app.run(debug = True)
