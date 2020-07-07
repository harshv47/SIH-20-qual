An alternate for the current CAPTCHA that doesn't need the user to interact and solve to prove itself human.
The software is divided into two parts, one runs on your browser and the other is on the website. The client side does all the analysis and sends the probability of the user being a robot to the website which can then take any action they want.

The client side determines the probability using three different approaches:
1. An average human's internet journey consists almost entirely of the top 200 websites. So there is a high probability that the user contains these websites. The extension matches these and produces a result.
2. A bot generally works by using the x-path of an element to interact with it. So, this part changes the x-path by adding random elements in between.
3. This part analyses the mouse movement of the user on the page and categorizes it as a bot or a human by using an LSTM model.

The final probability is calculated using the probabilities in the first and the third part.
