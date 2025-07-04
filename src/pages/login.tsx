import { useForm } from "react-hook-form"
import { Button } from "../shared/ui/button"
import { Card, CardHeader, Description, Title } from "../shared/ui/card"
import { Input } from "../shared/ui/input"
import { Label } from "../shared/ui/label"
import { Logo } from "../shared/ui/logo"
import { loginSchema, type LoginSchema } from "../schemas/login-schema"
import { zodResolver } from "@hookform/resolvers/zod"

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  function onSubmit(data: LoginSchema) {
    console.log(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo />
          <p className="text-muted-foreground">
            Academic Meeting Minutes Management
          </p>
        </div>

        {/* Card  */}
        <Card>
          <CardHeader>
            <Title>Sign in</Title>
            <Description>
              Enter your credentials to access your account
            </Description>
          </CardHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 p-6 pt-0">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="johndoe@uni.edu"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-destructive text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-destructive text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-4  items-center p-6 pt-0">
              <Button size="md" variant="primary" className="w-full">
                Sign in
              </Button>

              <Button variant="link" size="sm">
                Forgot password?
              </Button>
            </div>
          </form>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Demo credentials:</p>
          <p>Coordinator: coord@uni.edu / password</p>
          <p>Professor: prof@uni.edu / password</p>
        </div>
      </div>
    </div>
  )
}
