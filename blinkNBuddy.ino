#include "FastLED.h"
#include <time.h>
#include <stdlib.h>

#define NUM_LEDS 40
#define DATA_PIN 2

int currentX = 0;
int currentY = 0;


int moveX = 1;
int moveY = 1;

int last = 0;

// Define the array of leds
CRGB leds[NUM_LEDS];

int mapping[5][8] = 
{
  {17, 18, 19, 20, 21, 22, 23, 24},
  {16, 15, 14, 13, 28, 27, 26, 25},
  { 9, 10, 11, 12, 29, 30, 31, 32},
  { 8,  7,  6,  5, 36, 35, 34, 33},
  { 1,  2,  3,  4, 37, 38, 39, 40},
};

int getIndexByCoords(int x, int y)
{
  return mapping[y][x]-1;
}

void setLed(int x, int y, CRGB col)
{
  leds[getIndexByCoords(x, y)] = col;
}
 




void setup() {
  FastLED.addLeds<WS2811, DATA_PIN, RGB>(leds, NUM_LEDS);
}

void loop() { 


  setLed(currentX, currentY, CRGB::Black);

  currentX = currentX + moveX;
  currentY = currentY + moveY;

  if (currentX == 0) {
    moveX = moveX*-1;
  }
  if (currentY == 0) {
    moveY = moveY*-1;
  }
  
  if (currentX == 7) {
    moveX = moveX*-1;
  }
  if (currentY == 4) {
    moveY = moveY*-1;
  }

  CRGB color;

  color.r = rand() % 255;
  color.g = rand() % 255;
  color.b = rand() % 255;

  setLed(currentX, currentY, color);
  
  FastLED.show();

  delay(100);
/*
  for (int i = 0; i < 40; i++) {
    leds[i] = CRGB::White;
  }

  delay(100);
  
  FastLED.show();
  */
}
