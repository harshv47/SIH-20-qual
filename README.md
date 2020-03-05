# Pcaptcha
A passive under the hood captcha system.

## Description
An alternate for the current captcha that doesn't need the user to interact and solve to prove itself human. This solutin runs on the web and determines if it's a bot.

## DataSet 
In addition to the system we release a dataset containing the mouse movements of a bot and a human to help train a model which can predict the user using the website is a crawling bot or a human. Please note that the dataset is standard scaled with a mean of 0.1705401898887262 and variance of 24.22827724591758 . The dataset is present in the Mouse_Movement_Dataset folder above . A plot of the mouse movements of a bot and a human to help realize the difference between them is given below:

![alt text](https://github.com/harshv47/SIH-20-qual/blob/master/Human_bot_image.png)
The first image shows the mouse movements of a human and the second one shows that of a bot.

We also release a trained model with weights based on Long Short Term Memory(LSTM) Networks stored in the Trained_Model_and_Weights folder.

Please cite the repo and mail about the same to (pradyumna.gupta22@gmail.com) if using for publication purposes.

### Contributors
* [Harsh Vardhan](https://github.com/harshv47) 
* [Sourav Kumar Sahu](https://github.com/SouravSahu)
* [Utkarsh Deep](https://github.com/primalynative)
* [Pradyumna Gupta](https://github.com/PradyumnaGupta)
