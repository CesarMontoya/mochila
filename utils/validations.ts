export const isValidEmail = (email: string): boolean => {

  // const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  
    const match = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  
      return !!match;
  }
  
  export const isEmail = (email: string): string | undefined => {
    return isValidEmail(email) 
      ? undefined
      : 'El correo no parece ser válido';
  }

  export const isValidPassword = (password: string): boolean => {

    const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/

    return regexPass.test( password )
  }

  export const isValidName = (name: string): boolean => {

    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']{2,25}$/

    return regexName.test( name )
  }