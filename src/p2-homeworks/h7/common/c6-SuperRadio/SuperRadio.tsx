import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from '../../HW7.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i} className={s.label}>
            <input
                type={'radio'}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}
                className={s.checkbox}
                {...restProps}
            />
            {o}
        </label>
    )) : []

    return (
        <div className={s.form_radio_btn}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
