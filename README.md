# A Basic Drop Box Clone using node.js and multer

Allows user to transfer files locally between two different computers within the same network. All you need is the Device Name. 

## Direction
1. Clone this repo for each device that will be transferring files.
2. Navigate to the repo and install the app and its dependencies using `npm init`
3. Create two folders titled `in` and `out`. The `out` folder will contain files you want to transfer out. The `in` folder will contain files you want to receive.
4. If you're transferring file to a specific device, you will need to grab that device's name as shown in the network. Then, configure the `.env` file `REMOTE_URL` variable by changing it to `http://DEVICE_NAME.local:PORT_NUMBER` to establish a local connection. The `PORT_NUMBER` by default is 3333.
5. Run the app on both devices by typing `npm start` in the terminal. 
6. To transfer your file to DEVICE_NAME, simply drag the files into the `out` folder. The files will immediately appear in DEVICE_NAME's `in` folder. The files in the `out` folder will also be automatically deleted, so make sure you make a copy beforehand if you don't want to delete the transferred out files.
