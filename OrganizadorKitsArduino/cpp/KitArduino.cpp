#include "KitArduino.h"

KitArduino::KitArduino(int red, int yellow, int green, int white, int rgb, int ligth, int temperature, int buzzer, int button,
	int arduino, int protoboard, int lCD, int usb, int cableBag, int resistorBag, int resistor, int cable) {
	this->red = red;
	this->yellow = yellow;
	this->green = green;
	this->white = white;
	this->rgb = rgb;
	this->ligth = ligth;
	this->temperature = temperature;
	this->buzzer = buzzer;
	this->button = button;
	this->arduino = arduino;
	this->protoboard = protoboard;
	this->LCD = lCD;
	this->usb = usb;
	this->cableBag = cableBag;
	this->resistorBag = resistorBag;
	this->resistor = resistor;
	this->cable = cable;
}

void KitArduino::calculeItensPerKit(int totalBox) {

	std::cout << "Total de LED vermelho           : " << (float) this->red / totalBox;
	std::cout << "\nTotal de LED amarelo          : " << (float) this->yellow / totalBox;
	std::cout << "\nTotal de LED verde            : " << (float) this->green / totalBox;
	std::cout << "\nTotal de LED branco           : " << (float) this->white / totalBox;
	std::cout << "\nTotal de LED rgb              : " << (float) this->rgb / totalBox;
	std::cout << "\nTotal de sensor de luz        : " << (float) this->ligth / totalBox;
	std::cout << "\nTotal de sensor de temp       : " << (float) this->temperature / totalBox;
	std::cout << "\nTotal de buzzers              : " << (float) this->buzzer / totalBox;
	std::cout << "\nTotal de botões               : " << (float) this->button / totalBox;
	std::cout << "\nTotal de arduinos             : " << (float) this->arduino / totalBox;
	std::cout << "\nTotal de protoboards          : " << (float) this->protoboard / totalBox;
	std::cout << "\nTotal de lcds                 : " << (float) this->LCD / totalBox;
	std::cout << "\nTotal de usbs                 : " << (float) this->usb / totalBox;
	std::cout << "\nTotal de saco de cabos        : " << (float) this->cableBag / totalBox;
	std::cout << "\nTotal de saco de resistor     : " << (float) this->resistorBag / totalBox;
	std::cout << "\nTotal de cabos                : " << (float) this->cable / totalBox;
	std::cout << "\nTotal de resistores           : " << (float) this->resistor / totalBox;
	
}
