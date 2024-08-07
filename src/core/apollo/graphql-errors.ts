// graphql errors
export const graphqlErrors = (error: any, setError: any) => {
  if (error) {
    error.graphQLErrors.forEach(({ extensions }: any) => {
      const err = extensions?.originalError?.message as string[]

      if (typeof err === 'object') {
        err.forEach((e) => {
          const error = e.split('.')

          if (error.length < 2) {
            return setError(JSON.parse(e)?.input, { message: JSON.parse(e)?.message })
          } else if (error.length === 3) {
            return setError(`${error[0]}.${error[1]}.${JSON.parse(error[2])?.input}`, {
              message: JSON.parse(error[2])?.message,
            })
          } else if (error.length === 5) {
            return setError(
              `${error[0]}.${error[1]}.${error[2]}.${error[3]}.${JSON.parse(error[4])?.input}`,
              {
                message: JSON.parse(error[4])?.message,
              },
            )
          } else {
            return setError(`${error[0]}.${JSON.parse(error[1])?.input}`, {
              message: JSON.parse(error[1])?.message,
            })
          }
        })
      }
    })
  }
}
