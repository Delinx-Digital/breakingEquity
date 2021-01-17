import React from "react";

//TODO: Adding interface here
const ArrayLengthField = ({ record, source }: any) => {
    const value = record[source];
    return (
        <div>
            {value.length}
        </div>
    )
};

export default ArrayLengthField;
