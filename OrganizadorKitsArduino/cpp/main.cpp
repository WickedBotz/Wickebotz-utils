#include <locale.h>
#include "KitArduino.cpp"


/**
KitArduino(int red, int yellow, int green, int white, int rgb, int ligth, int temperature, int buzzer, int button,
			int arduino, int protoboard, int lCD, int usb, int cableBag, int resistorBag, int resistor, int cable);
*/

int main() {

	setlocale(LC_ALL, "");

	KitArduino a(104,110,111,27,25,25,22,26,100,25,24,27,21,32,29,0,0);
	const int TOTAL_BOX = 25;
	
	a.calculeItensPerKit(TOTAL_BOX);
	
	return 0;
	
}
