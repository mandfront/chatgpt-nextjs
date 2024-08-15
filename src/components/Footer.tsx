import { ChatMessageInput } from './ChatMessageInput'

type Props = {
  disabled: boolean
  onSendMessage: (message: string) => void
}

export const Footer = ({ disabled, onSendMessage }: Props) => {
  return (
    <footer className="w-full border-t border-t-gray-600 p-2">
      <div className="m-auto max-w-4xl">
        <ChatMessageInput disabled={disabled} onSend={onSendMessage} />
        <div className="cursor-default pt-3 text-center text-xs text-gray-300">
          Feito por Amanda Caraça - GitHub:&nbsp;
          <a
            className="cursor-pointer text-blue-400 hover:text-blue-500"
            target="_blank"
            href="https://github.com/mandfront"
            rel="noreferrer"
          >
            Acesse clicando aqui 😊
          </a>
        </div>
        <div className="cursor-default pt-1 text-center text-xs text-gray-300">
          Para fazer o uso é necessário cadastrar APIKey da OpenAI. 
        </div>
      </div>
    </footer>
  )
}
