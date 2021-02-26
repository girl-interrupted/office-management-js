// As a staff member
// In order to have meeting,
// I would like to check if the meeting room is available or not (true or false)
'use strict'
describe('meetingRoom', function() {
  let meetingroom;

  beforeEach (function() {
    meetingroom = new meetingRoom();
  });

  describe('in order to have a meeting staff can check if the meeting room is available or not', function() {
    it('check is meeting room is available or not', function() {
      expect(meetingroom.availability).toBe(true)
    });
  });

// As a staff member
// In order to have a meeting,
// I would like to be able to enter the meeting room and this should make it unavailable
  describe('make the room unavailable when it has been entered', function() {
    it('room becomes unavailable when entered', function() {
      expect(meetingroom.entered()).toEqual('this room is unavailable for the meeting at the moment')
    });
  });

// As a staff member
// In order to end a meeting
// I would like to be able to leave the meeting room and this should make it available again
  describe('meeting room becomes available when the staff member leaves', function() {
    it('room becomes available when vacated', function() {
      expect(meetingroom.available()).toEqual('this room is available for a meeting')
    })
  })

});