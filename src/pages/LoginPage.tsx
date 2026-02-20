import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export default function LoginPage() {
    const handleKakaoLogin = () => {
        alert('카카오 로그인은 현재 구현 예정입니다.');
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-md px-6 text-center"
            >
                {/* 로고 & 서비스명 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-900 rounded-2xl mb-6">
                        <ShoppingCart className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        공유 장바구니
                    </h1>
                    <p className="text-lg text-gray-600">
                        함께 쇼핑하고, 함께 관리하세요
                    </p>
                </motion.div>

                {/* 서비스 소개 */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-12 space-y-3"
                >
                    <div className="flex items-center justify-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <span className="text-sm">스마트한 쇼핑 경험</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <span className="text-sm">실시간 장바구니 공유</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <span className="text-sm">가족, 친구와 함께 예산 관리</span>
                    </div>
                </motion.div>

                {/* 카카오 로그인 버튼 */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.button
                        id="kakao-login-button"
                        onClick={handleKakaoLogin}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-[#000000] font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg"
                    >
                        <img
                            src="/kakao.svg"
                            alt="카카오 아이콘"
                            className="w-6 h-6"
                        />
                        카카오톡으로 시작하기
                    </motion.button>
                </motion.div>

                {/* 하단 안내 문구 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-8 text-xs text-gray-500"
                >
                    로그인 시 서비스 이용약관 및 개인정보처리방침에 동의하게 됩니다
                </motion.p>
            </motion.div>

            {/* 배경 장식 */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.03, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-gray-900 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.03, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-900 rounded-full blur-3xl"
                />
            </div>
        </div>
    );
}
