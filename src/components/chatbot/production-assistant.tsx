"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Bot } from "lucide-react";

type ChatMessage = {
    id: number;
    role: "user" | "assistant";
    content: string;
};

const panelVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.98 },
};

export function ProductionAssistant() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 1,
            role: "assistant",
            content:
                "Halo! Saya Fiacahya Assistant. Kamu bisa tanya soal jadwal produksi, estimasi kapasitas, atau ide paket snack untuk acara. 😊",
        },
    ]);
    const [input, setInput] = useState("");
    const listRef = useRef<HTMLDivElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const nextId = useRef(2);

    // scroll otomatis ke bawah setiap ada pesan baru
    useEffect(() => {
        if (!listRef.current) return;
        listRef.current.scrollTop = listRef.current.scrollHeight;
    }, [messages, open]);

    function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value;
        setInput(value);

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";

            const maxHeight = 120; // px, kira-kira 4–5 baris
            const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);

            textareaRef.current.style.height = `${newHeight}px`;
        }
    }

    // fungsi kirim pesan (sementara masih dummy)
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed) return;

        const userId = nextId.current++;
        const botId = nextId.current++;

        // Tambahkan pesan user dulu
        setMessages((prev) => [
            ...prev,
            { id: userId, role: "user", content: trimmed },
            // sementara: bot dummy → nanti ganti panggilan API
            {
                id: botId,
                role: "assistant",
                content:
                    "Terima kasih, pesannya sudah saya terima. Nanti bagian ini dihubungkan ke API model (misalnya OpenAI gpt-4.1-mini) untuk menjawab secara otomatis. 😊",
            },
        ]);

        setInput("");

        // TODO: di sini nanti ganti dengan:
        // const reply = await callYourBackend(trimmed);
        // lalu push reply ke messages.
    }

    return (
        <>
            {/* FLOATING TOGGLE BUTTON (bisa diklik juga via focusChatbot di homepage) */}
            <button
                aria-label="Buka Asisten Produksi AI"
                onClick={() => setOpen(true)}
                className="
    fixed bottom-5 right-4 z-40
    inline-flex items-center justify-center
    h-12 w-12 md:h-[52px] md:w-[52px]
    rounded-full
    bg-[#3E2A20]
    text-white
    shadow-[0_18px_40px_rgba(0,0,0,0.35)]
    hover:-translate-y-0.5 active:translate-y-0
    transition-transform
    md:bottom-6 md:right-6
    dark:bg-[#F5E2C8] dark:text-[#3E2A20]
  "
            >
                <Bot className="h-5 w-5" />
            </button>

            {/* PANEL CHAT */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-end justify-center sm:items-end sm:justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* backdrop klik-tutup di mobile */}
                        <div
                            className="absolute inset-0 bg-black/20 sm:bg-transparent"
                            onClick={() => setOpen(false)}
                        />

                        <motion.div
                            variants={panelVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.18 }}
                            className="
                relative z-10
                mb-4 w-full max-w-md
                rounded-3xl border
                border-[#E1C09A]/80 bg-white/95
                shadow-[0_22px_70px_rgba(15,23,42,0.25)]
                overflow-hidden
                sm:mr-4
                dark:bg-[#050505]/98 dark:border-neutral-800
              "
                        >
                            {/* HEADER */}
                            <header
                                className="
                  flex items-center justify-between gap-3
                  px-4 py-3
                  bg-gradient-to-r from-[#3D2618] to-[#5A3721]
                  text-[#FDE8D5]
                "
                            >
                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F7D3A5]">
                                        Fiacahya Assistant
                                    </p>
                                    <p className="text-xs font-semibold">
                                        Bantuan produksi & estimasi paket
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-[#FDE8D5]"
                                    aria-label="Tutup asisten produksi"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </header>

                            {/* AREA PESAN */}
                            <div
                                ref={listRef}
                                className="
                  max-h-[360px] min-h-[220px]
                  overflow-y-auto px-3 py-3 space-y-3
                  bg-gradient-to-b from-white to-[#FFF8F0]
                  dark:from-[#050505] dark:to-[#111111]
                "
                            >
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`
                      flex
                      ${msg.role === "user" ? "justify-end" : "justify-start"}
                    `}
                                    >
                                        <div
                                            className={`
                        max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed
                        ${msg.role === "user"
                                                    ? "bg-[#3E2A20] text-white dark:bg-[#F5E2C8] dark:text-[#2A170F]"
                                                    : "bg-white text-[#3A261A] border border-[#E3C9A8]/80 dark:bg-[#151515] dark:text-neutral-100 dark:border-neutral-700"
                                                }
                      `}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* INPUT AREA */}
                            <form
                                onSubmit={handleSubmit}
                                className="border-t border-[#E3C9A8]/80 bg-white/95 px-3 py-2 flex items-end gap-2 dark:bg-[#050505]/95 dark:border-neutral-800"
                            >
                                <textarea
                                    ref={textareaRef}
                                    value={input}
                                    onChange={handleInputChange}
                                    rows={1}
                                    placeholder='Tulis pertanyaan, misalnya: “Estimasi kapasitas untuk 100 pax besok pagi?”'
                                    className="
      flex-1 rounded-2xl border border-[#E3C9A8]/80
      bg-white/90 px-3 py-2 text-xs text-[#3A261A]
      focus:outline-none focus:ring-2 focus:ring-[#F4C58A]/80 focus:border-[#C48A4A]
      dark:bg-[#111111] dark:text-neutral-100 dark:border-neutral-700
      dark:focus:ring-amber-200/60 dark:focus:border-amber-300

      resize-none overflow-y-scroll no-scrollbar
    "
                                    style={{ minHeight: "2.5rem", maxHeight: "7.5rem" }} // opsional batas visual
                                />

                                <button
                                    type="submit"
                                    className="
      inline-flex h-9 w-9 items-center justify-center
      rounded-full bg-[#3E2A20] text-white
      shadow-[0_12px_30px_rgba(0,0,0,0.35)]
      disabled:opacity-40 disabled:shadow-none
      hover:-translate-y-0.5 active:translate-y-0
      transition-transform
      dark:bg-[#F5E2C8] dark:text-[#2A170F]
    "
                                    disabled={!input.trim()}
                                    aria-label="Kirim"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>


                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
