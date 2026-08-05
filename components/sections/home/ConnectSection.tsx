"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { Container } from "@/lib/common/Container";

const CAL_COM_USERNAME = "yuvaraj-dekhane-h4iqhf";
const CONTACT_EMAIL = "yuvarajdekhane8080@gmail.com";

const ROLE_OPTIONS = [
  "Founder",
  "HR / Company representative",
  "Other (not related to job offer or freelance work)",
];

const INQUIRY_OPTIONS = [
  "Want to hire you for job / job offer",
  "Have some freelance work",
  "None of the above",
];

const ctaButtonClasses = cn(
  "group flex cursor-pointer items-center gap-3 rounded-lg px-6 py-3.5",
  "bg-bg-secondary border border-border-color text-text-primary",
  "font-sans text-base font-medium no-underline",
  "shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300",
  "hover:bg-bg-hover hover:border-accent-blue hover:shadow-[0_10px_28px_rgba(0,0,0,0.2)]",
  "active:translate-y-0"
);

const ctaIconClasses =
  "shrink-0 text-green-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5";

const dropdownButtonClasses = cn(
  "flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3.5",
  "bg-bg-primary border border-border-color text-text-primary font-sans text-base",
  "transition-all duration-200 hover:border-border-hover hover:bg-bg-hover"
);

interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
}

function Dropdown({
  label,
  value,
  options,
  isOpen,
  onToggle,
  onSelect,
}: DropdownProps) {
  return (
    <div className="mb-6 last:mb-0">
      <label className="mb-3 block font-sans text-base font-medium text-text-primary transition-colors duration-300">
        {label}
      </label>
      <div className="relative w-full">
        <button className={dropdownButtonClasses} onClick={onToggle}>
          <span className={value ? "text-text-primary" : "text-text-secondary"}>
            {value || "Select an option..."}
          </span>
          <svg
            className={cn(
              "shrink-0 text-text-secondary transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {isOpen && (
          <motion.div
            className="absolute inset-x-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-border-color bg-bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {options.map((option, index) => (
              <button
                key={index}
                className={cn(
                  "w-full cursor-pointer border-b border-border-color bg-bg-primary px-4 py-3.5 text-left",
                  "font-sans text-base text-text-primary transition-all duration-200",
                  "last:border-b-0 hover:bg-bg-hover",
                  value === option && "bg-bg-hover font-medium"
                )}
                onClick={() => onSelect(option)}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function ConnectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ role: "", inquiryType: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    role: false,
    inquiryType: false,
  });
  const calInitialized = useRef(false);

  useEffect(() => {
    (async function () {
      if (!calInitialized.current) {
        const cal = await getCalApi({ namespace: "secret" });
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        calInitialized.current = true;
      }
    })();
  }, []);

  useEffect(() => {
    if (step === 3 && isModalOpen) {
      (async function () {
        const cal = await getCalApi({ namespace: "secret" });
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      })();
    }
  }, [step, isModalOpen]);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    setStep(1);
    setFormData({ role: "", inquiryType: "" });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStep(1);
    setFormData({ role: "", inquiryType: "" });
    setIsDropdownOpen({ role: false, inquiryType: false });
  };

  const isContinueDisabled = !formData.role || !formData.inquiryType;

  return (
    <>
      <section id="contact" className="scroll-mt-24">
        <Container className="flex min-h-[30vh] items-center justify-center bg-bg-primary py-24 transition-colors duration-300 max-[900px]:py-16">
          <motion.div
            className={cn(
              "flex w-full max-w-[600px] flex-col items-center gap-7 rounded-2xl border-2 border-dashed border-border-color bg-bg-primary px-8 py-12",
              "transition-colors duration-300 hover:border-border-hover",
              "max-[600px]:px-6 max-[600px]:py-9"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <Title
                level={2}
                className="m-0 font-display text-2xl font-semibold leading-[1.25] tracking-[0.04em] text-text-primary transition-colors duration-300 max-[600px]:text-xl"
              >
                Hey, you scrolled this far — let&apos;s talk
              </Title>
              <Text className="m-0 max-w-[440px] font-sans text-base leading-[1.6] text-text-secondary transition-colors duration-300 max-[600px]:text-sm">
                Open to full-time roles, freelance projects, and technical
                collaborations — tell me what you&apos;re building and I&apos;ll
                get back to you.
              </Text>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-4">
              <motion.button
                className={ctaButtonClasses}
                onClick={handleButtonClick}
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg
                  className={ctaIconClasses}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>Book a Free Call</span>
              </motion.button>
              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                className={cn(ctaButtonClasses, "inline-flex")}
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg
                  className={ctaIconClasses}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Email me</span>
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[9998] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            />
            <motion.div
              className={cn(
                "fixed left-1/2 top-1/2 z-[9999] m-0 max-h-[90vh] w-[90%] max-w-[500px] overflow-y-auto rounded-2xl p-8",
                "bg-bg-primary border border-border-color shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
                "max-[600px]:w-[95%] max-[600px]:p-6",
                step === 3 &&
                "max-h-[95vh] w-[95%] max-w-[1200px] p-6 max-[768px]:w-[98%] max-[768px]:p-4"
              )}
              initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={cn(
                  "absolute right-4 top-4 flex cursor-pointer items-center justify-center rounded border-none bg-transparent p-2",
                  "text-text-secondary transition-all duration-200 hover:bg-bg-hover hover:text-text-primary"
                )}
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {step !== 3 && (
                <>
                  <Title level={3} className="mb-2 mt-0 font-display text-2xl font-bold text-text-primary transition-colors duration-300 max-[600px]:text-xl">
                    Tell me about yourself
                  </Title>
                  <Text className="mb-8 font-sans text-sm text-text-secondary transition-colors duration-300">
                    Please select your inquiry type to continue.
                  </Text>
                </>
              )}

              {step === 1 && (
                <div className="mb-8">
                  <Dropdown
                    label="Are you a?"
                    value={formData.role}
                    options={ROLE_OPTIONS}
                    isOpen={isDropdownOpen.role}
                    onToggle={() =>
                      setIsDropdownOpen((prev) => ({
                        ...prev,
                        role: !prev.role,
                      }))
                    }
                    onSelect={(role) => {
                      setFormData((prev) => ({ ...prev, role }));
                      setIsDropdownOpen((prev) => ({ ...prev, role: false }));
                    }}
                  />
                  <Dropdown
                    label="What's your inquiry about?"
                    value={formData.inquiryType}
                    options={INQUIRY_OPTIONS}
                    isOpen={isDropdownOpen.inquiryType}
                    onToggle={() =>
                      setIsDropdownOpen((prev) => ({
                        ...prev,
                        inquiryType: !prev.inquiryType,
                      }))
                    }
                    onSelect={(inquiryType) => {
                      setFormData((prev) => ({ ...prev, inquiryType }));
                      setIsDropdownOpen((prev) => ({
                        ...prev,
                        inquiryType: false,
                      }));
                    }}
                  />
                </div>
              )}

              {step === 3 && (
                <div className="flex min-h-[600px] flex-col">
                  <Title level={3} className="mb-2 mt-0 font-display text-2xl font-bold text-text-primary transition-colors duration-300 max-[600px]:text-xl">
                    Book a Meeting
                  </Title>
                  <Text className="mb-8 font-sans text-sm text-text-secondary transition-colors duration-300">
                    Schedule a time to connect and discuss opportunities
                  </Text>
                  <div className="mt-4 h-[600px] min-h-[600px] w-full overflow-hidden rounded-lg border border-border-color bg-bg-secondary max-[768px]:h-[500px] max-[768px]:min-h-[500px]">
                    <iframe
                      src={`https://cal.com/${CAL_COM_USERNAME}/15min?embed=true&embedType=inline`}
                      className="block h-full w-full overflow-hidden rounded-lg border-none"
                      title="Book a meeting"
                      allow="camera; microphone; geolocation"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {step !== 3 && (
                <div className="mt-4 flex gap-4">
                  <button
                    className={cn(
                      "mt-4 w-full flex-1 cursor-pointer rounded-lg px-6 py-3.5",
                      "bg-bg-secondary border border-border-color text-text-primary font-sans text-base font-medium",
                      "transition-all duration-200",
                      isContinueDisabled
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-bg-hover hover:border-border-hover"
                    )}
                    onClick={() => {
                      if (formData.role && formData.inquiryType) setStep(3);
                    }}
                    disabled={isContinueDisabled}
                  >
                    Continue
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
