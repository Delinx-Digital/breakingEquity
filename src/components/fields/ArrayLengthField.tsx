import React from "react";

const ArrayLengthField = ({ record, source }: any) => {
    const value = record[source];
    return (
        <div>
            {value.length}
        </div>
    )
};

export default ArrayLengthField;
