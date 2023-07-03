import React, { SyntheticEvent } from 'react';
import Button from '../../../../_common/Button/Button';
import Input from '../../../../_common/Input/Input';

export type TProps = {
    value: string;
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
    onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
};

const AddCommentBlock: React.FC<TProps> = ({ value, onChange, onSubmit }) => (
    <form className="flex px-8 py-4 shadow-commentBoxShadow mt-auto" onSubmit={onSubmit}>
        <Input onChange={onChange} placeholderKey="commentPlaceholder" value={value}/>
        <Button disabled={!value} textKey="add"/>
    </form>
);

export default AddCommentBlock;
