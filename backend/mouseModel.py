import sys, json, numpy as np
import pandas as pd

lines = sys.argv[1]
#Since our input would only be having one line, parse our JSON data from that
lines=json.loads(lines)
np_lines = np.array(lines)

data=pd.DataFrame(np_lines)
data.columns=['x','y']
data["rot45X"] = .707* data["y"] + .707* data["x"] 
data["rot45Y"] = .707* data["y"] - .707* data["x"]

data["rot30X"] = (1.732/2)* data["x"] + (1./2)* data["y"] 
data["rot30Y"] = (1.732/2)* data["y"] - (1./2)* data["x"]

data["rot60X"] = (1./2)* data["x"] + (1.732/2)* data["y"] 
data["rot60Y"] = (1./2)* data["y"] - (1.732/2)* data["x"]

data["radial_r"] = np.sqrt( np.power(data["y"],2) + np.power(data["x"],2) )


# from tensorflow.keras.layers import Input,Dense,Bidirectional,LSTM
from tensorflow.keras.models import load_model
# from tensorflow.keras.optimizers import Adam
model=load_model('/home/utkarsh/SIH-20-qual/backend/mouse_model.h5')

def mouse_prediction(example):
  example[:,0]=example[:,0]/max(example[:,0])
  example[:,1]=example[:,1]/max(example[:,1])
  example=example[np.newaxis,:,:]
  pred=max(model.predict(example)[0])
  return pred

pred=mouse_prediction(np.array(data))
print(pred)
# if pred>0.5:
#   print("You are a Bot !!")
# else: 
#   print("You are not a Bot !!")

sys.stdout.flush()