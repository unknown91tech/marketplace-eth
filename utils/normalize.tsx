

export const COURSE_STATES:any = {
    0: "purchased",
    1: "activated",
    2: "deactivated",
}

export const normalizeOwnedCourse = (web3: { utils: { fromWei: (arg0: any) => any } }) => (course: any, ownedCourse: { id: any; proof: any; owner: any; price: any; state: string | number }) => {
    return {
        ...course,
        ownedCourseIdd: ownedCourse.id,
        proof: ownedCourse.proof,
        owned: ownedCourse.owner,
        price: web3.utils.fromWei(ownedCourse.price),
        state: COURSE_STATES[ownedCourse.state]
    }
}