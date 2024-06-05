

export interface UserProfile {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    role: string
    address: string
    dob: Date
    gender: Gender
    notifications: Record<string, {
        relatedToEvents: string
        reminders: string
        pushNotifications: string
        vibrations: boolean
    }>
}
export interface UserProfiles {

    usersProfile: UserProfile[]

}

enum Gender {
    MALE,
    FEMALE
}