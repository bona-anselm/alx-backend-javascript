#!/usr/bin/node

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomOne = new ClassRoom(19);
  const roomTwo = new ClassRoom(20);
  const roomThree = new ClassRoom(34);

  return [roomOne, roomTwo, roomThree];
}
