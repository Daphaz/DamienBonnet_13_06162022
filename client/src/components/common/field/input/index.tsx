import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Controller, FieldPath } from 'react-hook-form';

import s from './styles.module.scss';

import { ControlledCommons } from '../common.interface';

export interface InputTextProps<
  TFieldValues,
  TContext,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends ControlledCommons<TFieldValues, TContext, TFieldName> {
  inputProps?: Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'value' | 'onChange' | 'onBlur'
  >;
  label: string;
  checkbox?: boolean;
}

export const InputText = <
  TFieldValues,
  TContext,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  rules,
  checkbox = false,
  inputProps,
}: InputTextProps<TFieldValues, TContext, TFieldName>) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { className: classNameInput, ...restInputProps } =
          inputProps || {};

        const classes = clsx(s.container, {
          [s.isError]: error,
          [s.checkbox]: checkbox,
        });
        const classesInput = clsx(s.input, classNameInput);
        return (
          <div className={classes}>
            <label className={s.label} htmlFor={name}>
              {label}
            </label>
            <input
              id={name}
              value={field.value as string}
              onChange={field.onChange}
              onBlur={field.onBlur}
              className={classesInput}
              {...restInputProps}
            />
            {error && <span className={s.error}>{error.message}</span>}
          </div>
        );
      }}
    />
  );
};
