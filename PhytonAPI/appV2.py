import wiotp.sdk.gateway
import ibmiotf.application
import time
import json

options = {
"org": "gi2a9g",
"id": "gi2a9g",
"auth-method": "apikey",
"auth-key": "a-gi2a9g-lxhmyt5fgf", # Replace this with your auth key
"auth-token": "TQ_+daqN?M5YKLLFGA", # Replace this with your auth token
"clean-session": True
}

sourceDeviceType="Android"
sourceDeviceId="AD"
sourceEvent="accel"

targetDeviceType="Android"
targetDeviceId="AD"

def DeviceCallback(event):
	#time.sleep(10)
	 # Tempo de pausa para registro nos dados
	#print ("Got event " + json.dumps(event.data))
	data= event.data['d']
	print (data)
	#commandData={'state' : button }
	#client.publishCommand(targetDeviceType, targetDeviceId, "state", "json", commandData)


client = ibmiotf.application.Client(options)

client.connect()
client.deviceEventCallback = DeviceCallback

client.subscribeToDeviceEvents(deviceType=sourceDeviceType, deviceId=sourceDeviceId, event=sourceEvent)

while True:
		time.sleep(1)