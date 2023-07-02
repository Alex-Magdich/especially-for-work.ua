import React, {SyntheticEvent} from 'react';

export type TProps = {
    value: string;
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
    onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
};

const AddCommentBlock:React.FC<TProps> = ({ value, onChange, onSubmit }) => (
    <form className='flex px-8 py-4 shadow-commentBoxShadow mt-auto' onSubmit={onSubmit}>
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Додайте комментар"
            className='border border-gray-500 h-10 px-2 py-1 flex-1'
        />
        <button
            type='submit'
            disabled={!value}
            className='ml-2 bg-primary px-3.5 py-2 text-white rounded-filterBoxRadius disabled:opacity-75'
        >
            Додати
        </button>
    </form>
)

export default AddCommentBlock;