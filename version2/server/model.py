import sys
import tensorflow as tf
import matplotlib.pyplot as plt
import cv2
import os
import numpy as np
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing import image
from tensorflow.keras.optimizers import RMSprop

# print("Before loading model")
from keras.models import load_model
# loaded_model = load_model('D:\GithubWindows\MERN\TT_MERN\server\FFmy_model.h5')

# Load the model with custom objects
loaded_model = load_model('FFmy_model.h5', custom_objects=None, compile=True)

loaded_model_tr = load_model('Tr_cnn.h5', custom_objects=None, compile=True)

loaded_model_ts = load_model('Ts_cnn.h5', custom_objects=None, compile=True)


# Get the image path from command-line arguments
image_path = sys.argv[1]
# image_path = image_path[:-4]
# Find the index of the last dot in the file path
last_dot_index = image_path.rfind('.')

# Remove all characters after the last dot (including the dot itself)
image_path = image_path[:last_dot_index]

# img_path = r"D:\GithubWindows\MERN\TT_MERN\server\jeans.jpg"

img = image.load_img(image_path, target_size=(200, 200))
plt.imshow(img)
# plt.show()
X = image.img_to_array(img)
X = np.expand_dims(X, axis=0)
result = loaded_model.predict(X)
prediction = np.argmax(result) 





if ( prediction == 2):
    result_tr = loaded_model_tr.predict(X)
    prediction_tr = np.argmax(result_tr)

    if prediction_tr == 0:
        color="DarksTrouser"
    else:
        color="LightTrouser"

    print(color)

elif (prediction == 1):
    result_ts = loaded_model_ts.predict(X)
    prediction_ts = np.argmax(result_ts) 
    
    if prediction_ts == 0:
        color="DarksT-shirt"
    else:
        color="LightT-shirt"

    print(color)

else:
    result_ts = loaded_model_ts.predict(X)
    prediction_ts = np.argmax(result) 
    
    if prediction_ts == 0:
        color="DarksShoes:)"
    else:
        color="LightShoes:)"

    print(color)


# Define labels for predictions
# labels = {2: "Trouser", 1: "T-shirt", 0: "Shoes:)"}

# Print the prediction label
# if prediction in labels:
#     prediction_label = labels[prediction]
#     last_characters = prediction_label[-7:]  # Extract the last 7 characters
#     print(last_characters)
# else:
#     print("Unknown prediction")

