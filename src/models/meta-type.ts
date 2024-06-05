export interface MetaType {
    id: number;
    "values": string[];
    "name": name,
    "key": string

}
export interface MetaTypes {

    metaTypes: MetaType[];

}  
enum name{
    "File Type",
    "File Status",
    "Network Quality",
    "Connection Type",
    "Priority",
    "Role",
    "Event Status",
    "Device Type",
    "Event Type"
}