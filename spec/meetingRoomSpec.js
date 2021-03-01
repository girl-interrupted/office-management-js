// As a staff member
// In order to have meeting,
// I would like to check if the meeting room is available or not (true or false)
'use strict'
describe('meetingRoom', function() {
  let meetingroom;

  beforeEach (function() {
    meetingroom = new meetingRoom('Prague');
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

// As a staff member
// So that I can avoid interrupting a meeting
// I would like an error if I try to use a room that has already been entered
    it('a staff member will see an error if trying to use the room when it is not available', function() {
      meetingroom.entered()
      expect(function() {meetingroom.entered()}).toThrowError('please book another slot in order to use this room');
    });
  });

// As a staff member
// In order to end a meeting
// I would like to be able to leave the meeting room and this should make it available again
  describe('meeting room becomes available when the staff member leaves', function() {
    it('room becomes available when vacated', function() {
      expect(meetingroom.available()).toEqual('this room is available for a meeting')
    });
  });

// As a staff member
// In order to distinguish between meeting rooms
// I would like my meeting room to have a name
  describe('displays the name of the meeting room', function() {
    it('a staff member can see the name of the meeting room', function() {
      expect(meetingroom.name).toEqual('Prague')
    });
  });
});