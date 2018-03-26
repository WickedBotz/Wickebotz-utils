#include <iostream>

class KitArduino {
	
	public:
		int red;
		int yellow;
		int green;
		int white;
		int rgb;
		int ligth;
		int temperature;
		int buzzer;
		int button;
		int arduino;
		int protoboard;
		int LCD;
		int usb;
		int cableBag;
		int resistorBag;
		int resistor;
		int cable;

		KitArduino(int red, int yellow, int green, int white, int rgb, int ligth, int temperature, int buzzer, int button,
			int arduino, int protoboard, int lCD, int usb, int cableBag, int resistorBag, int resistor, int cable);
			
		void calculeItensPerKit(int totalBox);
};
