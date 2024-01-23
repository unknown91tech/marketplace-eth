// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CourseMarketplace {
    enum State {
        Purchase,
        Activated,
        Deactivated
    }

    mapping(bytes32 => Course) private ownedCourses;

    mapping (uint => bytes32) private ownedCourseHash;

    uint private totalOwnedCourses;

    struct Course {
        uint id;
        uint price;
        bytes32 proof;
        address owner;
        State state;
    }

    function purchaseCourse (bytes16 courseId, bytes32 proof)external payable returns(bytes32){
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));
        uint id = totalOwnedCourses++;
        ownedCourseHash[id] = courseHash;
        ownedCourses[courseHash] = Course({
        id: id,
        price: msg.value,
        proof: proof,
        owner: msg.sender,
        state: State.Purchased
        });
         
    }
}