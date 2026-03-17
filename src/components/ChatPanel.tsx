'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { suggestions } from '@/data/chat-context';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent]);

  const submitMessage = async (messageContent: string) => {
    if (!messageContent.trim() || isLoading) return;

    const userMessage = messageContent.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setStreamingContent('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';
      let buffer = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;
              try {
                const parsed = JSON.parse(data);
                if (parsed.text) {
                  fullContent += parsed.text;
                  setStreamingContent(fullContent);
                }
              } catch {
                // Ignore parse errors
              }
            }
          }
        }
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: fullContent }]);
      setStreamingContent('');
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    submitMessage(input);
  };

  const showWelcome = messages.length === 0 && !streamingContent && !isLoading;

  return (
    <div className="flex-1 flex flex-col w-full">
      <div className="flex-1 flex flex-col overflow-hidden"
        style={{
          backgroundColor: 'var(--color-surface)',
        }}
      >
        {/* Messages Area */}
        <div className="overflow-y-auto flex-1 min-h-[300px]">
          <div className="p-5 space-y-4">
            {/* Welcome */}
            {showWelcome && (
              <div className="py-8 px-4 animate-fadeIn">
                <div className="text-center mb-8">
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(232,195,104,0.1)' }}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-accent)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg mb-2 font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
                    Gates Foundation — Child Survival
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Ask about the strategy, research, case studies, or ways in
                  </p>
                </div>

                <div className="grid gap-2 max-w-md mx-auto">
                  {suggestions.map((s, index) => (
                    <button
                      key={s.label}
                      onClick={() => submitMessage(s.query)}
                      className="flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 hover:scale-[1.02] group"
                      style={{
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                      }}
                      disabled={isLoading}
                    >
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ backgroundColor: 'rgba(232,195,104,0.1)', color: 'var(--color-accent)' }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate" style={{ color: 'var(--color-text)' }}>{s.label}</p>
                        <p className="text-xs truncate" style={{ color: 'var(--color-text-secondary)' }}>{s.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                )}
                <div
                  className="max-w-[80%] p-4 rounded-xl"
                  style={{
                    backgroundColor: message.role === 'user' ? 'var(--color-accent)' : 'var(--color-bg)',
                    color: message.role === 'user' ? 'var(--color-bg)' : 'var(--color-text)',
                    border: message.role === 'assistant' ? '1px solid var(--color-border)' : 'none',
                  }}
                >
                  {message.role === 'assistant' ? (
                    <div className="prose prose-sm prose-invert max-w-none prose-headings:mt-2 prose-headings:mb-1 prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                  )}
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-surface-light)', color: 'var(--color-text-secondary)' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {/* Streaming */}
            {streamingContent && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="max-w-[80%] p-4 rounded-xl" style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                  <div className="prose prose-sm prose-invert max-w-none">
                    <ReactMarkdown>{streamingContent}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}

            {/* Loading */}
            {isLoading && !streamingContent && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full typing-dot" style={{ backgroundColor: 'var(--color-accent)' }} />
                    <span className="w-2 h-2 rounded-full typing-dot" style={{ backgroundColor: 'var(--color-accent)' }} />
                    <span className="w-2 h-2 rounded-full typing-dot" style={{ backgroundColor: 'var(--color-accent)' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div style={{ borderTop: '1px solid var(--color-border)' }}>
          <form onSubmit={handleSubmit} className="flex">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Ask about strategy, research, case studies..."
              className="flex-1 px-5 py-4 bg-transparent focus:outline-none text-sm"
              style={{ color: 'var(--color-text)' }}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-4 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
              style={{
                backgroundColor: input.trim() ? 'var(--color-accent)' : 'transparent',
                color: input.trim() ? 'var(--color-bg)' : 'var(--color-text-secondary)',
                borderRadius: '0 0 12px 0',
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
