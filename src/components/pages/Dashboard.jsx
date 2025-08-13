function Card(id, title, value, number, text) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200" key={id}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i data-feather="file-text" className="w-6 h-6 text-blue-600"></i>
                </div>
            </div>
            <div className="mt-4 flex items-center">
                <span className="text-green-500 text-sm font-medium">{number}</span>
                <span className="text-gray-600 text-sm ml-2">{text}</span>
            </div>
        </div>
    )
}

function Dashboard() {
    return (
        <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card id="1" title="총 포스트" value="127" number="+8" text="이번 달" />
                <Card id="2" title="조회수" value="24.5K" number="+15%" text="지난 달 대비" />
                <Card id="3" title="댓글" value="1,856" number="+22%" text="지난 달 대비" />
                <Card id="4" title="구독자" value="3,421" number="+12%" text="지난 달 대비" />
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">인기 포스트</h3>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">더보기</button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <span className="text-orange-600 font-bold text-sm">&lt;/&gt;</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-900">HTML5 시맨틱 태그 완벽 가이드</h4>
                                <p className="text-xs text-gray-500 mt-1">조회수 2,341 • 댓글 45</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                                <span className="text-cyan-600 font-bold text-sm">⚛</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-900">React Hooks 심화 활용법</h4>
                                <p className="text-xs text-gray-500 mt-1">조회수 1,892 • 댓글 32</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-sm">{}</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-900">CSS Grid vs Flexbox 비교</h4>
                                <p className="text-xs text-gray-500 mt-1">조회수 1,567 • 댓글 28</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <span className="text-yellow-600 font-bold text-sm">JS</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-900">ES6+ 최신 문법 정리</h4>
                                <p className="text-xs text-gray-500 mt-1">조회수 1,234 • 댓글 19</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">최근 활동</h3>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">전체보기</button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <i data-feather="edit" className="w-4 h-4 text-blue-600"></i>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">새 포스트 작성</p>
                                <p className="text-xs text-gray-500">5분 전</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <i data-feather="message-circle" className="w-4 h-4 text-green-600"></i>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">새 댓글 등록</p>
                                <p className="text-xs text-gray-500">12분 전</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                <i data-feather="eye" className="w-4 h-4 text-yellow-600"></i>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">포스트 조회수 증가</p>
                                <p className="text-xs text-gray-500">1시간 전</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <i data-feather="heart" className="w-4 h-4 text-purple-600"></i>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">새 구독자 추가</p>
                                <p className="text-xs text-gray-500">2시간 전</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200" id="posts-container">
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">블로그 포스트</h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                            새 포스트 작성
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카테고리</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">조회수</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">댓글</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">액션</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200" id="posts-tbody">
                            <tr className="hover:bg-gray-50" data-category="html">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                            <span className="text-orange-600 font-bold text-xs">&lt;/&gt;</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">HTML5 시맨틱 태그 완벽 가이드</div>
                                            <div className="text-sm text-gray-500">웹 접근성을 위한 시맨틱 마크업</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">HTML</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2,341</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">45</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">게시됨</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-blue-600 hover:text-blue-900 mr-3">편집</button>
                                    <button className="text-red-600 hover:text-red-900">삭제</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50" data-category="react">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center mr-3">
                                            <span className="text-cyan-600 font-bold text-xs">⚛</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">React Hooks 심화 활용법</div>
                                            <div className="text-sm text-gray-500">useState, useEffect 완벽 마스터</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-cyan-100 text-cyan-800">React</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,892</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">32</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">게시됨</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-14</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-blue-600 hover:text-blue-900 mr-3">편집</button>
                                    <button className="text-red-600 hover:text-red-900">삭제</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50" data-category="css">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                            <span className="text-blue-600 font-bold text-xs">{}</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">CSS Grid vs Flexbox 비교</div>
                                            <div className="text-sm text-gray-500">레이아웃 시스템 완벽 비교 분석</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">CSS</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,567</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">28</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">게시됨</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-13</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-blue-600 hover:text-blue-900 mr-3">편집</button>
                                    <button className="text-red-600 hover:text-red-900">삭제</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50" data-category="javascript">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                                            <span className="text-yellow-600 font-bold text-xs">JS</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">ES6+ 최신 문법 정리</div>
                                            <div className="text-sm text-gray-500">화살표 함수, 구조분해할당 등</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">JavaScript</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,234</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">19</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">초안</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-12</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-blue-600 hover:text-blue-900 mr-3">편집</button>
                                    <button className="text-red-600 hover:text-red-900">삭제</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50" data-category="figma">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                            <span className="text-purple-600 font-bold text-xs">F</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">Figma 디자인 시스템 구축하기</div>
                                            <div className="text-sm text-gray-500">컴포넌트와 스타일 가이드 만들기</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">Figma</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">987</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">15</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">게시됨</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-11</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-blue-600 hover:text-blue-900 mr-3">편집</button>
                                    <button className="text-red-600 hover:text-red-900">삭제</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;